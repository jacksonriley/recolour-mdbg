const mappings = [
     {
          original: "mpt1",
          new: "#00e304"
     },
     {
          original: "mpt2",
          new: "#b35815"
     },
     {
          original: "mpt3",
          new: "#f00f0f"
     },
     {
          original: "mpt4",
          new: "#002abf"
     },
     {
          original: "mpt5",
          new: "#777777"
     },
];

const table = document.getElementsByClassName("resultswrap")[0];

console.log(table);
mappings.forEach((obj) => {
     const spans = table.getElementsByClassName(obj.original);
     for (var i = 0; i < spans.length; i++) {
          spans[i].style.cssText = `color:${obj.new} !important`;
     }

})
