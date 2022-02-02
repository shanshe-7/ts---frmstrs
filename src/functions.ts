interface AddTwoNumber {
  (a: number, b: number): number;
}

type TwoNumberSubtract = (a: number, b: number) => number;

const addTwo: TwoNumberSubtract = (a, b) => {
  return a + b;
};

function invokeInFourSeconds(callback: () => void) {
  setTimeout(callback, 4000);
}

type FormHandler = (data: FormData) => void;
type MessageHandler = (evt: MessageEvent) => void;

// Function Overloads

function handleMainEvent(elem: HTMLFormElement, handler: FormHandler): void;

function handleMainEvent(
  elem: HTMLIFrameElement,
  handler: MessageHandler
): void;

function handleMainEvent(
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormHandler | MessageHandler
): void {}

handleMainEvent(document.querySelector("form"), (data) => {
  console.log(data);
});
