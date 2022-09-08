export function hasClass(dom: Node | null, className: string) {
  if (dom instanceof HTMLElement) {
    return dom.classList.contains(className);
  }
  return false;
}
