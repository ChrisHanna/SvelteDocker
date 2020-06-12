<script>
   let isVisible = false;
   let files = [];
   
   let data = {
     userid: "",
     secret: ""
   };  
   

   
   let getFiles = async () => {
     files = [];
     const res = await fetch("https://sastoken20200611.azurewebsites.net/api/Function1?userid="+ data.userid +"&secret="+ data.secret);

     const json = await res.json();
     files = json;    
     isVisible = true;
   };
   
   const handleContainerSwitch = () => {
    isVisible = false;
    data.userid = "";
    data.secret = "";
   }
</script>
<section>
   <div class="container">
      <div class="row mt-12 ">
         {#if isVisible == false}
         <div class="col-md-12">
            <div class="card p-2 shadow">
               <div class="card-body">
                  <h5 class="card-title mb-4">File Viewer</h5>
                  <form>
                     <div class="form-group">
                        <label for="userid">User ID</label>
                        <input
                           bind:value={data.userid}
                           type="text"
                           class="form-control"
                           id="text"
                           placeholder="Enter User ID" />
                     </div>
                     <div class="form-group">
                        <label for="secret">User Secret</label>
                        <input
                           bind:value={data.secret}
                           type="text"
                           class="form-control"
                           id="text"
                           placeholder="Enter User Secret" />
                     </div>
                     <button
                        type="submit"
                        on:click|preventDefault={getFiles}
                        class="btn btn-primary">
                     View Files
                     </button>
                  </form>
               </div>
            </div>
         </div>
         {/if} 
         {#if isVisible}

                     <div class="card p-2 shadow">
               <div class="card-body">
          
                                    <button
            type="submit"
            on:click|preventDefault={handleContainerSwitch}
            class="btn btn-primary">
         Switch Containers
         </button>
         <div class="col-md-12" style="margin-top:10px;">

            <table class="table table-striped">
               <thead>
                  <tr>
                     <th scope="col">File Name</th>
                     <th scope="col">Created</th>
                     <th scope="col">Modified</th>
                     <th scope="col">Type</th>
                  </tr>
               </thead>
               <tbody>
                  {#each files as file}
                  <tr>
                     <th scope="row"><a href="{file.url}" target="_blank" download>{file.filename}</a></th>
                     <td>{file.created}</td>
                     <td>{file.modified}</td>
                     <td>{file.filetype}</td>
                  </tr>
                  {/each}
               </tbody>
            </table>
         </div>
         </div>
         </div>
         {/if}
      </div>
   </div>
</section>