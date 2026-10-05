// discord_app/design/components/TextField/native/SearchField.native.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import TextField2 from "TextField.native.tsx";
import MagnifyingGlassIcon from "../../Icon/native/redesign/generated/MagnifyingGlassIcon.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        let first;
        const obj = react2;
        const cResult = obj.c(4);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl2.intl;
          const stringResult = intl.string(intl2.t["5h0QOP"]);
          cResult[0] = stringResult;
          first = stringResult;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === arg0) {
          let tmp6;
          if (cResult[2] === ref) {
            tmp6 = cResult[3];
          }
          return tmp6;
        }
        const TextField = TextField2.TextField;
        const merged = Object.assign(arg0);
        const tmp8 = (
          <TextField
            placeholder={first}
            returnKeyType="search"
            ref={ref}
            autoCorrect={false}
            autoCapitalize="none"
            accessibilityRole="search"
            leadingIcon={MagnifyingGlassIcon.MagnifyingGlassIcon}
            clearable
          />
        );
        cResult[1] = arg0;
        cResult[2] = ref;
        cResult[3] = tmp8;
        tmp6 = tmp8;
      }
    : (arg0, ref) => {
        const TextField = TextField2.TextField;
        const intl = intl2.intl;
        const merged = Object.assign(arg0);
        return (
          <TextField
            placeholder={intl.string(intl2.t["5h0QOP"])}
            returnKeyType="search"
            ref={ref}
            autoCorrect={false}
            autoCapitalize="none"
            accessibilityRole="search"
            leadingIcon={MagnifyingGlassIcon.MagnifyingGlassIcon}
            clearable
          />
        );
      },
);
const result = size.fileFinishedImporting("design/components/TextField/native/SearchField.native.tsx");

export const SearchField = forwardRefResult;
