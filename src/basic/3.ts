// Створіть змінну, яка може містити або рядок, або число (union type)?
// Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

type EquationAnswer = string | number;
let answer: EquationAnswer;
answer = "iDonotKnow";
answer = 5;

type Option = "enable" | "disable";
let lightInHouse: Option;
lightInHouse = "enable";
