module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/_reset.scss";
        `
      }
    }
  }
};