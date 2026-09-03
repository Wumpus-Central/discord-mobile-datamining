// === Module 6046: CardContent ===

// Module 6046 (CardContent)
import closure_0 from "_slicedToArray" /* 32 */;
import closure_1 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

({ StyleSheet, View: obj1 } = get_ActivityIndicator);
const styles = StyleSheet.create({ page: { minHeight: "100%" }, card: { flex: 1, overflow: "hidden" } });

export const CardContent = function CardContent(layout) {
  layout = layout.layout;
  ({ enabled, style } = layout);
  const merged = Object.assign(layout, Object.create(null));
  let React;
  const tmp2 = layout(React.useState(false), 2);
  React = tmp2[1];
  let items = [, ];
  ({ height: arr[0], width: arr[1] } = layout);
  const effect = React.useEffect(() => {
    if (typeof document !== "undefined") {
      const _document8 = document;
      if (document.body) {
        const _document = document;
        const _document2 = document;
        const size = element;
        if (clientHeight === element.height) {
          const _navigator = navigator;
          if (navigator.maxTouchPoints > 0) {
            const _document4 = document;
            element = document.getElementById("__react-navigation-stack-mobile-chrome-viewport-fix");
            if (element == null) {
              const _document5 = document;
              element = <style />;
            }
            element.id = "__react-navigation-stack-mobile-chrome-viewport-fix";
            function updateStyle() {
              const items = [":root { --vh: " + 0.01 * window.innerHeight + "px; }", "body { height: calc(var(--vh, 1vh) * 100); }"];
              element.textContent = items.join("\n");
            }
            const _window = window;
            const _HermesInternal = HermesInternal;
            let items = [":root { --vh: " + 0.01 * window.innerHeight + "px; }", "body { height: calc(var(--vh, 1vh) * 100); }"];
            element.textContent = items.join("\n");
            const _document6 = document;
            if (!head.contains(element)) {
              const _document7 = document;
              head2.appendChild(element);
            }
            const _window2 = window;
            const listener = window.addEventListener("resize", updateStyle);
            const fn = function t() {
              const removed = window.removeEventListener("resize", updateStyle);
            };
          }
          let tmp10 = tmp === size.width;
          if (tmp10) {
            tmp10 = clientHeight === size.height;
          }
          updateStyle(tmp10);
          return fn;
        }
        const _document3 = document;
        const element1 = document.getElementById("__react-navigation-stack-mobile-chrome-viewport-fix");
        if (element1 != null) {
          element1.remove();
        }
      }
    }
  }, items);
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.pointerEvents = "box-none";
  if (enabled) {
    if (tmp2[0]) {
      let card = closure_4.page;
    }
    const items1 = [card, style];
    obj.style = items1;
    return <closure_2 {...obj} />;
  }
  card = closure_4.card;
};