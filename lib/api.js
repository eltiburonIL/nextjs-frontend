export async function getUserInfo(userID) {
    const apiEndpoint = 'https://apigroup.dimaf.demo.altostrat.com/user-info/?user_id='
    const response = await fetch(`${apiEndpoint}${userID}`, {
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