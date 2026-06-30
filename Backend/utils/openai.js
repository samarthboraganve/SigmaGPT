import "dotenv/config";

const getOpenAIAPIResponse = async (message) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": process.env.GEMINI_API_KEY
        },
        body: JSON.stringify({
            contents: [{
                parts: [{ text: message }]
            }]
        })
    };

    const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        options
    );
    const data = await response.json();
    console.log("Gemini response:", JSON.stringify(data));

    if (!response.ok || !data.candidates || !data.candidates[0]) {
        throw new Error(
            `Gemini API error: ${data.error?.message || JSON.stringify(data)}`
        );
    }

    return data.candidates[0].content.parts[0].text;
};

export default getOpenAIAPIResponse;