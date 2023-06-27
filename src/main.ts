import defineFirstUniqueChar from "./defineFirstUniqueChar";

const input = document.getElementById("input") as HTMLInputElement;
const button = document.getElementById("button") as HTMLButtonElement;
const exampleButton = document.getElementById("exampleButton") as HTMLButtonElement;

const exampleText: string = `The Tao gave birth to machine language.  Machine language gave birth
to the assembler.
The assembler gave birth to the compiler.  Now there are ten thousand
languages.
Each language has its purpose, however humble.  Each language
expresses the Yin and Yang of software.  Each language has its place within
the Tao.
But do not program in COBOL if you can avoid it.
        -- Geoffrey James, "The Tao of Programming"`;


button.addEventListener("click",  () => {
  const text = input.value; 
  if (text !== "") {
    defineFirstUniqueChar(text);
    input.value = "";
  } else {
    alert("Print some text")
  }
});

exampleButton.addEventListener("click",  () => {
  defineFirstUniqueChar(exampleText);
});
