// discord_app/design/components/Pile/native/AvatarDuoPile.native.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import ClipView from "../../Icon/native/ClipView.tsx";
import Pile2 from "Pile.native.tsx";
import ListUtils from "../../../../utils/ListUtils.tsx";
import CutoutableAvatarImage from "../../../void/CutoutableAvatarImage/native/CutoutableAvatarImage.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let closure_2 = ["size", "children"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let arr;
      let children;
      let tmp11;
      let tmp4;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(12);
      if (cResult[0] !== arg0) {
        let prop;
        ({ size, children } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_2);
        const Pile = Pile2.Pile;
        if ("aria-label" in tmp9) {
          prop = tmp9["aria-label"];
        } else {
          const tmpResult = ListUtils;
          prop = tmpResult.getListSummaryLabel(tmp9.names);
        }
        cResult[0] = arg0;
        cResult[1] = Pile;
        cResult[2] = children;
        cResult[3] = size;
        cResult[4] = prop;
        tmp6 = prop;
        arr = size;
        tmp5 = children;
        tmp4 = Pile;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        arr = cResult[3];
        tmp6 = cResult[4];
      }
      if (cResult[5] !== arr) {
        let mapped;
        const tmpResult2 = _mod12;
        if (tmpResult2.isArray(arr)) {
          mapped = arr.map((item) => CutoutableAvatarImage.AVATAR_SIZE_MAP[item]);
        } else {
          mapped = CutoutableAvatarImage.AVATAR_SIZE_MAP[arr];
        }
        cResult[5] = arr;
        cResult[6] = mapped;
        tmp11 = mapped;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] === tmp4) {
        if (cResult[8] === tmp5) {
          if (cResult[9] === tmp6) {
            let tmp13;
            if (cResult[10] === tmp11) {
              tmp13 = cResult[11];
            }
            return tmp13;
          }
        }
      }
      const tmp14 = (
        <tmp4 aria-label={tmp6} shape={ClipView.CutoutShape.Circle} size={tmp11} gap={4} depthX={0.5} depthY={0.5}>
          {tmp5}
        </tmp4>
      );
      cResult[7] = tmp4;
      cResult[8] = tmp5;
      cResult[9] = tmp6;
      cResult[10] = tmp11;
      cResult[11] = tmp14;
      tmp13 = tmp14;
    }
  : (size) => {
      let mapped;
      let prop;
      size = size.size;
      const children = size.children;
      const merged = Object.assign(size, Object.assign({ size: 0, children: 0 }));
      const Pile = Pile2.Pile;
      if ("aria-label" in merged) {
        prop = merged["aria-label"];
      } else {
        const tmp3Result = ListUtils;
        prop = tmp3Result.getListSummaryLabel(merged.names);
      }
      const tmp3Result2 = _mod12;
      if (tmp3Result2.isArray(size)) {
        mapped = size.map((item) => CutoutableAvatarImage.AVATAR_SIZE_MAP[item]);
      } else {
        mapped = CutoutableAvatarImage.AVATAR_SIZE_MAP[size];
      }
      return (
        <Pile aria-label={prop} shape={ClipView.CutoutShape.Circle} size={mapped} gap={4} depthX={0.5} depthY={0.5}>
          {children}
        </Pile>
      );
    };
let size = size_mod;
const result = size.fileFinishedImporting("design/components/Pile/native/AvatarDuoPile.native.tsx");

export const AvatarDuoPile = tmp3;
