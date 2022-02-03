const buat_login = () => {
  const daftar = document.getElementById("signup");
  daftar.parentElement.removeChild(daftar);

  //  CREATE FORM SIGNUP
  const p = document.createElement("p");
  p.className = "tulisan_login";
  p.innerHTML = "Silahkan Mendaftar";

  const element = document.getElementsByTagName("div")[0];
  element.appendChild(p);

  const form = document.createElement("form");
  element.appendChild(form);

  const label = document.createElement("label");
  label.innerHTML = "Nama User";
  form.appendChild(label);

  const input_namauser = document.createElement("input");
  input_namauser.type = "text";
  input_namauser.name = "Nama User";
  input_namauser.placeholder = "Nama User";
  input_namauser.className = "form_login";

  form.appendChild(input_namauser);

  const label1 = document.createElement("label");
  label1.innerHTML = "Nomor Handphone";
  form.appendChild(label1);

  const input_Handphone = document.createElement("input");
  input_Handphone.type = "tel";
  input_Handphone.name = "Handphone";
  input_Handphone.placeholder = "Nomor Handphone";
  input_Handphone.className = "form_login";

  form.appendChild(input_Handphone);

  const label2 = document.createElement("label");
  label2.innerHTML = "Username";
  form.appendChild(label2);

  const input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "Username";
  input_username.placeholder = "Username";
  input_username.className = "form_login";

  form.appendChild(input_username);

  const label3 = document.createElement("label");
  label3.innerHTML = "Password";
  form.appendChild(label3);

  const input_password = document.createElement("input");
  input_password.type = "password";
  input_password.placeholder = "Password";
  input_password.className = "form_login";

  form.appendChild(input_password);

  const tombol = document.createElement("input");
  tombol.type = "submit";
  tombol.className = "tombol_login";

  form.appendChild(tombol);
};
