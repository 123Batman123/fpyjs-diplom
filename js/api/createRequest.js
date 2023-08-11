/**
 * Основная функция для совершения запросов по Yandex API.
 * */
const createRequest = (options = {}) => {
    const method = options.method
    let url = new URL(options.url)
    let headers = options.headers
    let params = options.data
    let callback = options.callback
    let error = null
    const xhr = XMLHttpRequest()

    xhr.responseType = 'json'

    Object.entries(params).forEach(([k, v]) => {
        url.searchParams.set(k, v)
    })

    try {
        xhr.open(method, url)
        Object.entries(headers).forEach(([k, v]) => {
            xhr.setRequestHeader(k, v)
        })
        xhr.send()
    }
    catch (err) {
        error = err
    }

    xhr.onload = () => {
        callback(error, xhr.response)
    }
};
