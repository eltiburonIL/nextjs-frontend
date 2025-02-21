export async function getUserInfo(userID) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user-info/?user_id=${userID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    if (!response.ok) {
        throw new Error(`API Error: ${response.status}`)
    }
    return response.json()
}