$('#update_user').submit(function (event) {
    event.preventDefault();    
    let unindexed_Data=$(this).serializeArray();
    console.log(unindexed_Data);
    let Data={};
    $.map(unindexed_Data,function(n,i) {
        Data[n['name']]=n['value'];
    })
    unindexed_Data.map(function(){
        Data[n['name']]=n['value'];
    })
    console.log(Data);
    $.ajax({
        url: `http://localhost:3000/api_user/${Data._id}`,
        type: 'put',
        data: Data,
        success: function(response){
           alert('Data Updated Successfully');
        }
         
      });
})
// if(window.location.pathname=='/'){
//     $ondelete=$("a .delete");
//     $ondelete.click(function(){
//         let id=$(this).attr("data-id");
//     })
//     if (confirm("Do You Want TO Delete The Record")) {
//         $.ajax({
//             url: `http://localhost:3000/api_user/${id}`,
//             type: 'DELETE',
//             success: function(response){
//                alert('Data Deleted Successfully');
//             }
//           });
//     }
// }
$('.delete').click(function(){
    let id=$(this).attr("data-id");
    if (confirm("Do You Want TO Delete The Record")) {
        $.ajax({
            url: `http://localhost:3000/api_user/${id}`,
            type: 'DELETE',
            success: function(response){
               alert('Data Deleted Successfully');
               location.reload();
            }
          }); 
    }
})