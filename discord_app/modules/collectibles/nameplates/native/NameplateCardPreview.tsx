// discord_app/modules/collectibles/nameplates/native/NameplateCardPreview.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import utils from "../utils.tsx";
import CollectiblesItemType from "../../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import NameplateDummyUserPreview from "NameplateDummyUserPreview.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { nameplatePreviewContainer: null, nameplateContainer: null, nameplate: null };
let size = {
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  paddingHorizontal: nativeDefault.space.PX_8,
};
obj.nameplatePreviewContainer = size;
obj.nameplateContainer = {
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  borderRadius: nativeDefault.radii.sm,
};
let obj2 = {
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  borderRadius: nativeDefault.radii.sm,
};
obj.nameplate = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateCardPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function NameplateCardPreview(arg0) {
      const cResult = c.c(16);
      ({ item, animate } = arg0);
      const tmp5 = closure_6();
      _modDef38(item.type === CollectiblesItemType.CollectiblesItemType.NAMEPLATE, "Item must be Nameplate");
      if (cResult[0] !== item) {
        const nameplateData = utils.getNameplateData(item);
        cResult[0] = item;
        cResult[1] = nameplateData;
        let tmp8 = nameplateData;
        const tmpResult = utils;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { width: 34, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: { opacity: 0.6 } };
        const tmp12 = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, obj2);
        cResult[2] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { width: 44, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: { opacity: 0.6 } };
        const tmp15 = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, obj3);
        cResult[3] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[3];
      }
      if (cResult[4] === (undefined !== animate && animate)) {
        if (cResult[5] === tmp8) {
          if (cResult[6] === tmp5.nameplate) {
            let tmp16 = cResult[7];
          }
          if (cResult[8] === tmp5.nameplateContainer) {
            if (cResult[9] === tmp16) {
              let tmp18 = cResult[10];
            }
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = {
                width: 44,
                avatarSize: native.AvatarSizes.XSMALL,
                hideAvatar: true,
                style: { opacity: 0.6 },
              };
              const tmp24 = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, obj4);
              cResult[11] = tmp24;
              let tmp22 = tmp24;
            } else {
              tmp22 = cResult[11];
            }
            const _Symbol2 = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              const obj5 = {
                width: 34,
                avatarSize: native.AvatarSizes.XSMALL,
                hideAvatar: true,
                style: { opacity: 0.6 },
              };
              const tmp27 = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, obj5);
              cResult[12] = tmp27;
              let tmp25 = tmp27;
            } else {
              tmp25 = cResult[12];
            }
            if (cResult[13] === tmp5.nameplatePreviewContainer) {
              if (cResult[14] === tmp18) {
                let tmp28 = cResult[15];
              }
              return tmp28;
            }
            const obj6 = { style: tmp5.nameplatePreviewContainer, children: null };
            const items = [tmp10, tmp13, tmp18, tmp22, tmp25];
            obj6.children = items;
            const tmp31 = hasOwnProperty(View, obj6);
            cResult[13] = tmp5.nameplatePreviewContainer;
            cResult[14] = tmp18;
            cResult[15] = tmp31;
            tmp28 = tmp31;
          }
          const obj7 = { style: tmp5.nameplateContainer, children: tmp16 };
          const tmp21 = React4(View, obj7);
          cResult[8] = tmp5.nameplateContainer;
          cResult[9] = tmp16;
          cResult[10] = tmp21;
          tmp18 = tmp21;
        }
      }
      const tmp17 = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, {
        width: 54,
        avatarSize: native.AvatarSizes.XSMALL,
        nameplate: tmp8,
        style: tmp5.nameplate,
        animate: undefined !== animate && animate,
      });
      cResult[4] = undefined !== animate && animate;
      cResult[5] = tmp8;
      cResult[6] = tmp5.nameplate;
      cResult[7] = tmp17;
      tmp16 = tmp17;
      const obj8 = {
        width: 54,
        avatarSize: native.AvatarSizes.XSMALL,
        nameplate: tmp8,
        style: tmp5.nameplate,
        animate: undefined !== animate && animate,
      };
    }
  : function NameplateCardPreview(arg0) {
      ({ item, animate } = arg0);
      if (animate === undefined) {
        animate = false;
      }
      const tmp = closure_6();
      _modDef38(item.type === CollectiblesItemType.CollectiblesItemType.NAMEPLATE, "Item must be Nameplate");
      const obj2 = { style: tmp.nameplatePreviewContainer, children: null };
      const nameplateData = utils.getNameplateData(item);
      const items = [
        React4(NameplateDummyUserPreview.NameplateDummyUserPreview, {
          width: 34,
          avatarSize: native.AvatarSizes.XSMALL,
          hideAvatar: true,
          style: { opacity: 0.6 },
        }),
        ,
        ,
        ,
      ];
      const obj3 = { width: 34, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: { opacity: 0.6 } };
      items[1] = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, {
        width: 44,
        avatarSize: native.AvatarSizes.XSMALL,
        hideAvatar: true,
        style: { opacity: 0.6 },
      });
      const obj5 = { style: tmp.nameplateContainer, children: null };
      const obj4 = { width: 44, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: { opacity: 0.6 } };
      obj5.children = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, {
        width: 54,
        avatarSize: native.AvatarSizes.XSMALL,
        nameplate: nameplateData,
        style: tmp.nameplate,
        animate,
      });
      items[2] = React4(View, obj5);
      const obj6 = {
        width: 54,
        avatarSize: native.AvatarSizes.XSMALL,
        nameplate: nameplateData,
        style: tmp.nameplate,
        animate,
      };
      items[3] = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, {
        width: 44,
        avatarSize: native.AvatarSizes.XSMALL,
        hideAvatar: true,
        style: { opacity: 0.6 },
      });
      const obj7 = { width: 44, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: { opacity: 0.6 } };
      items[4] = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, {
        width: 34,
        avatarSize: native.AvatarSizes.XSMALL,
        hideAvatar: true,
        style: { opacity: 0.6 },
      });
      obj2.children = items;
      return hasOwnProperty(View, obj2);
    };
