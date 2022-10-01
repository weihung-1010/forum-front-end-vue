import axios from 'axios'
import Swal from 'sweetalert2'
const baseURL = 'http://localhost:3000/api'
//利用export在vue當中可以使用
export const apiHelper = axios.create({
  baseURL
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})