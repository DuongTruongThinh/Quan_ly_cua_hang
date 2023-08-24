function fetchProductList() {
  startLoading();
  axios({
    url: "https://64e31eb0bac46e480e7834ab.mockapi.io/Product",
    method: "GET",
  })
    .then(function (res) {
      list = res.data;
      renderProductList(list);
      endLoading();
    })
    .catch(function (err) {
      console.log(err);
      endLoading();
    });
}
fetchProductList();
function deleteProduct(id) {
  startLoading();
  axios({
    // delete
    url: `https://64e31eb0bac46e480e7834ab.mockapi.io/Product/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      fetchProductList();
    })
    .catch(function (err) {
      endLoading();
    });
}
function addProduct() {
  var product = getDataForm();
  axios({
    url: "https://64e31eb0bac46e480e7834ab.mockapi.io/Product",
    method: "POST",
    data: product,
  })
    .then(function (res) {
      $("#myModal").modal("hide");
      fetchProductList();
    })
    .catch(function (err) {});
}
function editProduct(id) {
  $("#myModal").modal("show");
  axios({
    url: `https://64e31eb0bac46e480e7834ab.mockapi.io/Product/${id}`,
    method: "GET",
  })
    .then(function (res) {
      showDataForm(res.data);
    })
    .catch(function (err) {});
}
function updateProduct(id) {
  var product = getDataForm();
  axios({
    url: `https://64e31eb0bac46e480e7834ab.mockapi.io/Product/${product.id}`,
    method: "PUT",
    data: product,
  })
    .then(function (res) {
      console.log("🚀 ~ file: main.js:64 ~ res:", res);
      $("#myModal").modal("hide");
      fetchProductList();
    })
    .catch(function (err) {
      console.log("🚀 ~ file: main.js:68 ~ updateProduct ~ err:", err);
    });
}
