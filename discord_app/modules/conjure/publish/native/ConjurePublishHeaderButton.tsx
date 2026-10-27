// discord_app/modules/conjure/publish/native/ConjurePublishHeaderButton.tsx
import c from "../../../../../_runtime/00576_c.js";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishHeaderButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjurePublishHeaderButton(arg0) {
      const cResult = c.c(6);
      ({ variant, text, publishing, onPress } = arg0);
      const tmp4 = _slicedToArray(noop.useState(text), 2);
      const first = tmp4[0];
      let tmp6 = publishing;
      if (!publishing) {
        tmp6 = text === first;
      }
      if (!tmp6) {
        tmp4[1](text);
      }
      let tmp8 = text;
      if (publishing) {
        tmp8 = first;
      }
      if (cResult[0] === onPress) {
        if (cResult[1] === publishing) {
          if (cResult[2] === tmp8) {
            if (cResult[3] === text) {
              if (cResult[4] === variant) {
                let tmp9 = cResult[5];
              }
              return tmp9;
            }
          }
        }
      }
      const tmp10 = jsx(components_Button_Button.Button, {
        variant,
        size: "sm",
        text: tmp8,
        accessibilityLabel: text,
        loading: publishing,
        onPress,
      });
      cResult[0] = onPress;
      cResult[1] = publishing;
      cResult[2] = tmp8;
      cResult[3] = text;
      cResult[4] = variant;
      cResult[5] = tmp10;
      tmp9 = tmp10;
    }
  : function ConjurePublishHeaderButton(arg0) {
      ({ text, publishing } = arg0);
      ({ variant, onPress } = arg0);
      const tmp = _slicedToArray(noop.useState(text), 2);
      const first = tmp[0];
      let tmp3 = publishing;
      if (!publishing) {
        tmp3 = text === first;
      }
      if (!tmp3) {
        tmp[1](text);
      }
      const obj = { variant, size: "sm", text: null, accessibilityLabel: null, loading: null, onPress: null };
      let tmp6 = text;
      if (publishing) {
        tmp6 = first;
      }
      obj.text = tmp6;
      obj.accessibilityLabel = text;
      obj.loading = publishing;
      obj.onPress = onPress;
      return jsx(components_Button_Button.Button, {
        variant,
        size: "sm",
        text: null,
        accessibilityLabel: null,
        loading: null,
        onPress: null,
      });
    };
