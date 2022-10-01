import moment from "moment"

export const fromNowFilter = {
  filters:{
    fromNow(dataTime) {
      if (!dataTime) return '-'
      return moment(dataTime).fromNow()
  }
 }
}

export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || 'https://fakeimg.pl/350x220/DFDFDF/?text=No+Image'
    }
  }
}