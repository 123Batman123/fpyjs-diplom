/**
 * Класс Yandex
 * Используется для управления облаком.
 * Имеет свойство HOST
 * */
class Yandex {
  static HOST = 'https://cloud-api.yandex.net/v1/disk';

  /**
   * Метод формирования и сохранения токена для Yandex API
   */
  static getToken(){
    const token = localStorage.getItem('tokenYa')
    if (!token) {
      token = prompt('Токен от Яндекс Диска')
      localStorage.setItem('tokenYa', token)
    }
    return token
  }

  /**
   * Метод загрузки файла в облако
   */
  static uploadFile(path, url, callback){
    const options = {
      method: 'POST',
      url: this.HOST + '/resources/upload',
      data: {url, path},
      headers: {'Authorization': this.HOST},
      callback
    }
    createRequest(options)
  }

  /**
   * Метод удаления файла из облака
   */
  static removeFile(path, callback){
    const options = {
      method: 'DELETE',
      url: this.HOST + '/resources',
      data: {path},
      headers: {'Authorization': this.HOST},
      callback
    }
    createRequest(options)
  }

  /**
   * Метод получения всех загруженных файлов в облаке
   */
  static getUploadedFiles(callback){
    const options = {
      method: 'GET',
      url: this.HOST + '/resources/last-uploaded',
      // data: {path},
      headers: {'Authorization': this.HOST},
      callback
    }
    createRequest(options)
  }

  /**
   * Метод скачивания файлов
   */
  static downloadFileByUrl(url){
    const link = document.createElement('a')
    link.href = url
    link.click()
  }
}
