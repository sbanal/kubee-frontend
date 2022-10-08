export interface HelloResponse {
    message: string;
}

export const getMessage = async (name: string): Promise<HelloResponse> => {
    return fetch('http://localhost:8080/hello', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name})
    }).then(response => {
        return response.json()
    });
};
