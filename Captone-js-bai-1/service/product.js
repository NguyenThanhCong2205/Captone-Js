var productService = {
    createProduct: function(product){
       return axios({
            url: "https://638f27369cbdb0dbe31e8b59.mockapi.io//Products",     
            method: "POST",
            // request body => POST, PUT, PATCH
            data: product,
          });

    },
    fetchProduct: function(){
         return  axios({
            url: "https://638f27369cbdb0dbe31e8b59.mockapi.io//Products",
            method: "GET",
          });
    },
    deleteProduct: function(id){
       return axios({
            url: "https://638f27369cbdb0dbe31e8b59.mockapi.io//Products/" + id,
            method: "DELETE",
          });
    },
    fetchProductDetail: function(id){
return  axios({
    url: "https://638f27369cbdb0dbe31e8b59.mockapi.io//Products/" + id,
    method: "GET",
  });
    },
    updateProduct: function(product){
        return   axios({
            url: "https://638f27369cbdb0dbe31e8b59.mockapi.io//Products" + product.id,
            method: "PUT",
            // request body => POST, PUT, PATCH
            data: product,
          });
    },
};  