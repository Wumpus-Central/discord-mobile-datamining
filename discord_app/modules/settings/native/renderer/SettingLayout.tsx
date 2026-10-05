// discord_app/modules/settings/native/renderer/SettingLayout.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import SettingRendererConstants from "SettingRendererConstants.tsx";
import SettingListRenderer from "SettingListRenderer.tsx";
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let node;

const NodeType = SettingRendererConstants.NodeType;
const jsx = Fragment.jsx;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (node) => {
        const obj = react2;
        const cResult = obj.c(4);
        node = node.node;
        const type = node.type;
        if (NodeType.LIST === type) {
          let tmp9;
          if (cResult[0] !== node) {
            const tmp11 = jsx(SettingListRenderer.SettingsList, { node });
            cResult[0] = node;
            cResult[1] = tmp11;
            tmp9 = tmp11;
          } else {
            tmp9 = cResult[1];
          }
          return tmp9;
        } else if (tmp4.SEGMENTED_CONTROL === type) {
          let tmp5;
          if (cResult[2] !== node) {
            const tmp8 = jsx(SettingSegmentedControlRendererDefault, { node });
            cResult[2] = node;
            cResult[3] = tmp8;
            tmp5 = tmp8;
          } else {
            tmp5 = cResult[3];
          }
          return tmp5;
        }
      }
    : (node) => {
        node = node.node;
        const type = node.type;
        if (NodeType.LIST === type) {
          return jsx(SettingListRenderer.SettingsList, { node });
        } else if (tmp.SEGMENTED_CONTROL === type) {
          return jsx(SettingSegmentedControlRendererDefault, { node });
        }
      },
);
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingLayout.tsx");

export default memoResult;
