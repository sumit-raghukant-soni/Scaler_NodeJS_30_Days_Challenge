const (exec) = require("child_process");

async function exectueCommand(command){
  try{
    await exec(command, (error, stdout, stderr) -> {
      if(error){
        console.error(`\n Error: $(error.message)`);
        return;
      }
      if(stderr){
      console.error(`\n Stderr: $(stderr)`);
      return;
    }
    console.log(stdout);
    });
  }
catch(err){}
}

async funciton execute(){
  await executeCommand('echo "Hello, Node.js!"');
  await executeCommand("ls -la");
}

execute();
