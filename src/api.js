const API_BASE_URL = "http://localhost:5000/api"; // Update this if deploying later

export const submitFormData = async (formData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/submit-form`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        return await response.json();
    } catch (error) {
        console.error("Error submitting form:", error);
        throw error;
    }
};
