// discord_app/modules/collectibles/native/ProfileEffectSampleV2.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import CollectiblesPreviewConstants from "CollectiblesPreviewConstants.tsx";
import _modDef8456 from "../../../../discord_assets/assets/collectibles/previews/sample_profile.png.js";
import ProfileEffectDefault from "../profile_effects/native/ProfileEffect.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let obj2;
let size;
const View = react_native.View;
const SAMPLE_PROFILE_ASPECT_RATIO = CollectiblesPreviewConstants.SAMPLE_PROFILE_ASPECT_RATIO;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  profileContainer: { position: "absolute", display: "flex", height: "100%", width: "100%" },
  profileBackground: obj2,
  sampleProfileImage: { aspectRatio: SAMPLE_PROFILE_ASPECT_RATIO },
  profileBorder: size,
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles = createStyles.createStyles;
size = {
  position: "absolute",
  height: "100%",
  width: "100%",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_MUTED,
};
let closure_6 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let hideBackground;
      let item;
      let items1;
      const obj = react;
      const cResult = obj.c(18);
      ({ item, hideBackground } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === tmp4.profileContainer) {
        let tmp6;
        let tmp7;
        let tmp9;
        let tmp11;
        if (cResult[1] === (!(undefined !== hideBackground && hideBackground) && tmp4.profileBackground)) {
          tmp6 = cResult[2];
        }
        if (cResult[3] !== tmp4.sampleProfileImage) {
          const items = [tmp4.sampleProfileImage];
          cResult[3] = tmp4.sampleProfileImage;
          cResult[4] = items;
          tmp7 = items;
        } else {
          tmp7 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { uri: _modDef8456 };
          cResult[5] = obj2;
          tmp9 = obj2;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] !== tmp7) {
          const obj3 = { style: tmp7, source: tmp9, accessible: false, resizeMode: "cover" };
          const tmp14 = React3(FastImageDefault, obj3);
          cResult[6] = tmp7;
          cResult[7] = tmp14;
          tmp11 = tmp14;
        } else {
          tmp11 = cResult[7];
        }
        if (cResult[8] === (undefined !== hideBackground && hideBackground)) {
          let tmp15;
          let tmp19;
          if (cResult[9] === tmp4.profileBorder) {
            tmp15 = cResult[10];
          }
          if (cResult[11] !== item.skuId) {
            const obj4 = { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true };
            const tmp22 = React3(ProfileEffectDefault, obj4);
            cResult[11] = item.skuId;
            cResult[12] = tmp22;
            tmp19 = tmp22;
          } else {
            tmp19 = cResult[12];
          }
          if (cResult[13] === tmp6) {
            if (cResult[14] === tmp11) {
              if (cResult[15] === tmp15) {
                let tmp23;
                if (cResult[16] === tmp19) {
                  tmp23 = cResult[17];
                }
                return tmp23;
              }
            }
          }
          const obj5 = { style: tmp6, children: items1 };
          items1 = [tmp11, tmp15, tmp19];
          const tmp26 = hasOwnProperty(View, obj5);
          cResult[13] = tmp6;
          cResult[14] = tmp11;
          cResult[15] = tmp15;
          cResult[16] = tmp19;
          cResult[17] = tmp26;
          tmp23 = tmp26;
        }
        let tmp16 = !tmp3;
        if (tmp16) {
          const obj6 = { style: tmp4.profileBorder };
          tmp16 = React3(View, obj6);
        }
        cResult[8] = undefined !== hideBackground && hideBackground;
        cResult[9] = tmp4.profileBorder;
        cResult[10] = tmp16;
        tmp15 = tmp16;
      }
      const items2 = [
        tmp4.profileContainer,
        !(undefined !== hideBackground && hideBackground) && tmp4.profileBackground,
      ];
      cResult[0] = tmp4.profileContainer;
      cResult[1] = !(undefined !== hideBackground && hideBackground) && tmp4.profileBackground;
      cResult[2] = items2;
      tmp6 = items2;
    }
  : (hideBackground) => {
      let items1;
      let items2;
      let obj3;
      let flag = hideBackground.hideBackground;
      const item = hideBackground.item;
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_6();
      const items = [tmp.profileContainer];
      const profileBackground = !flag && tmp.profileBackground;
      const obj = { style: items, children: items2 };
      items[1] = profileBackground;
      const obj2 = { style: items1, source: obj3, accessible: false, resizeMode: "cover" };
      items1 = [tmp.sampleProfileImage];
      obj3 = { uri: _modDef8456 };
      const tmp7 = FastImageDefault;
      items2 = [React3(tmp7, obj2), ,];
      let tmp4Result = !flag;
      if (tmp4Result) {
        const obj4 = { style: tmp.profileBorder };
        tmp4Result = React3(View, obj4);
      }
      items2[1] = tmp4Result;
      const obj5 = { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true };
      items2[2] = React3(ProfileEffectDefault, obj5);
      return hasOwnProperty(View, obj);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/ProfileEffectSampleV2.tsx");

export default tmp4;
