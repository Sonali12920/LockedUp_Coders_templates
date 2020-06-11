<template>
  <div class="container my-5">
    <div class="row" style="border:2px solid #e0e0e0;border-radius : 7px; ">
      <div class="col-md-6 p-4 " style="background-color:#e0e0e0; margin:auto auto;">
        <h3>Enter your details here</h3>
        <form>
          <div class="form-group px-4" style="max-width:70%; margin-top:3px;">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style="align-self:center;"
            />
          </div>
          <div class="form-group px-4"  style="max-width:70%;">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" class="btn btn-primary" style="margin-left:30px;">Submit</button>
        </form>
      </div>
      <div class="col-md-6 p-4 text-center">
        <h3>Data</h3>
        <table style="border:2px solid #e0e0e0;border-radius : 7px; width:70%; height:60%; margin: 4px auto;">
          <tr style="background-color:#e0e0e0;">
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Front"
};
</script>

<style >
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}

th,
td {
  padding: 6px;
}

th {
  text-align: left;
}

table {
  border-spacing: 2px;
}
</style>
