import axios from 'axios';

const apiBaseUrl = process.env.API_BASE_URL || 'http://localhost:3000/';
const httpClietInstance = axios.create({ baseURL: apiBaseUrl })

const imageUploadingServiceApi = {
  upload: (data) => {
    let formData = new FormData()
    formData.set('owner[name]', data.name);

    for(let i = 0; i < data.images.length; i++) {
      formData.append(`owner[images_attributes[][description]]`, data.images[i].description);
      formData.append(`owner[images_attributes[][file]]`, data.images[i].file);
    }

    return httpClietInstance.post(
      '/upload',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
  },

  images: async () => (await httpClietInstance.get('/images')).data
}

export default imageUploadingServiceApi;
