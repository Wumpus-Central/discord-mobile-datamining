// discord_app/modules/collectibles/native/AvatarDecorationProductPreview.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import intl2 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import useShopProductItems from "../hooks/useShopProductItems.tsx";
import useCurrentUser from "../hooks/useCurrentUser.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let product;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({
  fullSizePreview: { flex: 1, alignItems: "center", justifyContent: "center" },
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (product) => {
      const obj = react2;
      const cResult = obj.c(9);
      product = product.product;
      const tmp4 = closure_4();
      const obj2 = useCurrentUser;
      const currentUser = obj2.useCurrentUser();
      const obj3 = useShopProductItems;
      const firstAvatarDecoration = obj3.useShopProductItems(product).firstAvatarDecoration;
      if (null == firstAvatarDecoration) {
        return null;
      } else {
        let tmp6;
        const fullSizePreview = tmp4.fullSizePreview;
        if (cResult[0] !== firstAvatarDecoration.label) {
          const intl = intl2.intl;
          const obj4 = { a11y_text: firstAvatarDecoration.label };
          const formatToPlainStringResult = intl.formatToPlainString(intl2.t.Do2lxE, obj4);
          cResult[0] = firstAvatarDecoration.label;
          cResult[1] = formatToPlainStringResult;
          tmp6 = formatToPlainStringResult;
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[2] === firstAvatarDecoration) {
          let tmp8;
          if (cResult[3] === currentUser) {
            tmp8 = cResult[4];
          }
          if (cResult[5] === tmp4.fullSizePreview) {
            if (cResult[6] === tmp6) {
              let tmp11;
              if (cResult[7] === tmp8) {
                tmp11 = cResult[8];
              }
              return tmp11;
            }
          }
          const tmp14 = (
            <View
              style={fullSizePreview}
              pointerEvents="box-none"
              accessibilityLabel={tmp6}
              accessibilityRole="image"
              accessible
            >
              {tmp8}
            </View>
          );
          cResult[5] = tmp4.fullSizePreview;
          cResult[6] = tmp6;
          cResult[7] = tmp8;
          cResult[8] = tmp14;
          tmp11 = tmp14;
        }
        const Avatar = native.Avatar;
        const tmp10 = (
          <Avatar
            user={currentUser}
            guildId="r"
            size={native.AvatarSizes.GIFT_START}
            avatarDecoration={firstAvatarDecoration}
            animate={null}
          />
        );
        cResult[2] = firstAvatarDecoration;
        cResult[3] = currentUser;
        cResult[4] = tmp10;
        tmp8 = tmp10;
      }
    }
  : (product) => {
      product = product.product;
      const tmp = closure_4();
      const obj = useCurrentUser;
      const currentUser = obj.useCurrentUser();
      const obj2 = useShopProductItems;
      const firstAvatarDecoration = obj2.useShopProductItems(product).firstAvatarDecoration;
      let tmp5 = null;
      if (null != firstAvatarDecoration) {
        const intl = intl2.intl;
        const obj4 = { a11y_text: firstAvatarDecoration.label };
        ({
          user: currentUser,
          guildId: "r",
          size: native.AvatarSizes.GIFT_START,
          avatarDecoration: firstAvatarDecoration,
          animate: null,
        });
        const Avatar = native.Avatar;
        tmp5 = (
          <View
            style={tmp.fullSizePreview}
            pointerEvents="box-none"
            accessibilityLabel={intl.formatToPlainString(intl2.t.Do2lxE, obj4)}
            accessibilityRole="image"
            accessible
          >
            {null}
          </View>
        );
      }
      return tmp5;
    };
const result = size.fileFinishedImporting("modules/collectibles/native/AvatarDecorationProductPreview.tsx");

export default tmp3;
