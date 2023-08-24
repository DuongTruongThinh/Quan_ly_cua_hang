function renderProductList(list) {
  var contentHTML = "";
  for (var i = list.length - 1; i >= 0; i--) {
    var item = list[i];
    var stringTr = `<tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>${item.img}</td>
    <td>${item.desc}</td>
    <td><button class="btn btn-warning" onclick=editProduct(${item.id}) >Sửa</button>
    <button class="btn btn-danger" onclick=deleteProduct(${item.id})>Xóa</button></td>
    </tr>`;
    contentHTML = contentHTML + stringTr;
  }
  document.getElementById("tblDanhSachSP").innerHTML = contentHTML;
}
function startLoading() {
  document.getElementById("spinner").style.display = "flex";
}
function endLoading() {
  document.getElementById("spinner").style.display = "none";
}
function getDataForm() {
  var ten = document.getElementById("TenSP").value;
  var gia = document.getElementById("GiaSP").value * 1;
  var hinhAnh = document.getElementById("HinhSP").value;
  var ma = document.getElementById("MaSP").value;
  return {
    id: ma,
    name: ten,
    price: gia,
    img: hinhAnh,
    desc: "Ngon",
  };
}
function showDataForm(data) {
  document.getElementById("TenSP").value = data.name;
  document.getElementById("GiaSP").value = data.price;
  document.getElementById("HinhSP").value = data.img;
  document.getElementById("MaSP").value = data.id;
}
