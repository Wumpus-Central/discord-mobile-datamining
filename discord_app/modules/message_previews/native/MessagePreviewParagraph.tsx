// discord_app/modules/message_previews/native/MessagePreviewParagraph.tsx
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function MeasuredParagraph(leadingContent) {
  leadingContent = leadingContent.leadingContent;
  const mentions = leadingContent.mentions;
  const onLayout = leadingContent.onLayout;
  const merged = Object.assign(
    leadingContent,
    Object.assign({ leadingContent: 0, mentions: 0, children: 0, onLayout: 0 }),
  );
  const variant = merged.variant;
  const maxFontSizeMultiplier = merged.maxFontSizeMultiplier;
  const tmp2 = onLayout(variant.useState(0), 2);
  const first = tmp2[0];
  closure_6 = tmp2[1];
  let tmp4 = onLayout(variant.useState([]), 2);
  const first1 = tmp4[0];
  closure_8 = tmp4[1];
  const fontScale = leadingContent(mentions[7]).useFontScale();
  let obj = leadingContent(mentions[7]);
  items = [variant, maxFontSizeMultiplier, mentions, first, first1, fontScale];
  const tmp7 = closure_8();
  const memo = variant.useMemo(() => {
    let obj = {
      variant,
      maxFontSizeMultiplier,
      widths: new Map(
        mentions.map((node, index) => {
          let tmp15;
          let tmp16;
          items = [node.node];
          let tmp4;
          if (0 !== first) {
            if (null != tmp2) {
              const _Math = Math;
              const bound = Math.max(0, tmp - 1 / maxFontSizeMultiplier.get() - tmp2);
              let tmp10 = bound;
              if (obj.isAndroid()) {
                tmp10 = bound;
                if (fontScale > 1) {
                  const _Math3 = Math;
                  let sum = Math.ceil(bound) + 1;
                  let num2 = 0;
                  let num3 = 0;
                  if (1 < sum) {
                    do {
                      let _Math2 = Math;
                      let rounded = Math.floor((num2 + sum) / 2);
                      let obj2 = leadingContent(mentions[5]);
                      tmp15 = num2;
                      tmp16 = rounded;
                      if (obj2.scaleLineHeight(rounded, fontScale) <= bound) {
                        tmp16 = sum;
                        tmp15 = rounded;
                      }
                      sum = tmp16;
                      num2 = tmp15;
                      num3 = tmp15;
                    } while (tmp16 - tmp15 > 1);
                  }
                  tmp10 = num3;
                }
              }
              tmp4 = tmp10;
              obj = leadingContent(mentions[6]);
            }
          }
          items[1] = tmp4;
          return items;
        }),
      ),
    };
    return obj;
  }, items);
  let obj2 = { value: memo, children: null };
  const obj3 = {};
  const merged1 = Object.assign(merged);
  const items1 = [merged.style, tmp7.paragraph];
  obj3.style = items1;
  obj3.onLayout = function onLayout(nativeEvent) {
    closure_6(nativeEvent.nativeEvent.layout.width);
    if (onLayout != null) {
      onLayout(nativeEvent);
    }
  };
  const items2 = [leadingContent, leadingContent.children];
  obj3.children = items2;
  const items3 = [closure_6(leadingContent(mentions[9]).Text, obj3)];
  let tmp12 = first > 0;
  if (tmp12) {
    const obj4 = {
      style: tmp8.probes,
      pointerEvents: "none",
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: mentions.map((prefix, index) => {
        closure_0 = index;
        const obj = {
          variant,
          maxFontSizeMultiplier,
          accessible: false,
          onTextLayout(nativeEvent) {
            const lines = nativeEvent.nativeEvent.lines;
            const atResult = lines.at(-1);
            let tmp3;
            if (null != atResult) {
              if (lines.length <= 1) {
                let num2 = atResult.width;
              } else {
                num2 = Infinity;
              }
              tmp3 = num2;
            }
            num2 = tmp3;
            closure_8((arg0) => {
              if (arg0[closure_0] === num2) {
                return arg0;
              } else {
                items = [];
                HermesBuiltin.arraySpread(arg0, 0);
                items[tmp] = tmp2;
                return items;
              }
            });
          },
          children: null,
        };
        items = [closure_0, prefix.prefix, "\u2026"];
        obj.children = items;
        return closure_6(leadingContent(mentions[9]).Text, obj, index);
      }),
    };
    tmp12 = first1(first, obj4);
  }
  items3[1] = tmp12;
  obj2.children = items3;
  return closure_6(leadingContent(mentions[8]).PreviewMentionLayoutContext.Provider, obj2);
}
get_ActivityIndicator = fn(17);
({ PixelRatio: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsxs: closure_6, jsx: metroImportDefault } = jsxProd);
let createStyles = fn(5243);
let closure_8 = createStyles.createStyles({ paragraph: { width: "100%", minWidth: 0, flexShrink: 1 } });
createStyles = fn(5243);
let closure_9 = createStyles.createStyles((width) => {
  const obj = { probes: null };
  const size = { position: "absolute", width, height: 0, overflow: "hidden", opacity: 0 };
  obj.probes = size;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/message_previews/native/MessagePreviewParagraph.tsx");

export function MessagePreviewParagraph(arg0) {
  ({ mentions, leadingContent, children } = arg0);
  const merged = Object.assign(arg0, Object.assign({ mentions: 0, leadingContent: 0, children: 0 }));
  if (null != mentions) {
    if (0 !== mentions.length) {
      const obj = {};
      const merged1 = Object.assign(merged);
      obj.leadingContent = leadingContent;
      obj.mentions = mentions;
      obj.children = children;
      let tmp7 = metroImportDefault(MeasuredParagraph, obj);
    }
    return tmp7;
  }
  const obj2 = {};
  const merged2 = Object.assign(merged);
  items = [leadingContent, children];
  obj2.children = items;
  tmp7 = timestampProducer(Text_Text.Text, obj2);
}
