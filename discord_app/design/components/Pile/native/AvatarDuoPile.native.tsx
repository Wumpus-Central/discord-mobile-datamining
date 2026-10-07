// discord_app/design/components/Pile/native/AvatarDuoPile.native.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import c from "../../../../../_runtime/00576_c.js";
import ClipView from "../../Icon/native/ClipView.tsx";
import Pile2 from "Pile.native.tsx";
import ListUtils from "../../../../utils/ListUtils.tsx";
import CutoutableAvatarImage from "../../../void/CutoutableAvatarImage/native/CutoutableAvatarImage.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["size", "children"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("design/components/Pile/native/AvatarDuoPile.native.tsx");

export const AvatarDuoPile = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(12);
      if (cResult[0] !== arg0) {
        ({ size, children } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_2);
        const Pile = Pile2.Pile;
        if ("aria-label" in tmp9) {
          let prop = tmp9["aria-label"];
        } else {
          prop = ListUtils.getListSummaryLabel(tmp9.names);
          const tmpResult = ListUtils;
        }
        cResult[0] = arg0;
        cResult[1] = Pile;
        cResult[2] = children;
        cResult[3] = size;
        cResult[4] = prop;
      } else if (cResult[5] !== cResult[3]) {
        if (tmpResult2.isArray(arr)) {
          let mapped = arr.map((item) => CutoutableAvatarImage.AVATAR_SIZE_MAP[item]);
        } else {
          mapped = CutoutableAvatarImage.AVATAR_SIZE_MAP[arr];
        }
        cResult[5] = arr;
        cResult[6] = mapped;
        tmpResult2 = _mod12;
      } else {
        if (cResult[7] === tmp4) {
          if (cResult[8] === tmp5) {
            if (cResult[9] === tmp6) {
              if (cResult[10] === tmp15) {
                let tmp18 = cResult[11];
              }
              return tmp18;
            }
          }
        }
        const obj2 = {
          "aria-label": tmp6,
          shape: ClipView.CutoutShape.Circle,
          size: cResult[6],
          gap: 4,
          depthX: 0.5,
          depthY: 0.5,
          children: tmp5,
        };
        const tmp20 = (
          <tmp4
            aria-label={tmp6}
            shape={ClipView.CutoutShape.Circle}
            size={cResult[6]}
            gap={4}
            depthX={0.5}
            depthY={0.5}
          >
            {tmp5}
          </tmp4>
        );
        cResult[7] = tmp4;
        cResult[8] = tmp5;
        cResult[9] = tmp6;
        cResult[10] = cResult[6];
        cResult[11] = tmp20;
        tmp18 = tmp20;
      }
    }
  : (size) => {
      size = size.size;
      const merged = Object.assign(size, Object.assign({ size: 0, children: 0 }));
      if ("aria-label" in merged) {
        let prop = merged["aria-label"];
      } else {
        prop = ListUtils.getListSummaryLabel(merged.names);
        const tmp3Result = ListUtils;
      }
      const obj = {
        "aria-label": prop,
        shape: ClipView.CutoutShape.Circle,
        size: null,
        gap: 4,
        depthX: 0.5,
        depthY: 0.5,
        children: null,
      };
      if (tmp3Result2.isArray(size)) {
        let mapped = size.map((item) => CutoutableAvatarImage.AVATAR_SIZE_MAP[item]);
      } else {
        mapped = CutoutableAvatarImage.AVATAR_SIZE_MAP[size];
      }
      obj.size = mapped;
      obj.children = size.children;
      return jsx(Pile2.Pile, {
        "aria-label": prop,
        shape: ClipView.CutoutShape.Circle,
        size: null,
        gap: 4,
        depthX: 0.5,
        depthY: 0.5,
        children: null,
      });
    };
