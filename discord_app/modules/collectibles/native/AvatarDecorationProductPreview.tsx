// discord_app/modules/collectibles/native/AvatarDecorationProductPreview.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import useShopProductItems from "../hooks/useShopProductItems.tsx";
import useCurrentUser from "../hooks/useCurrentUser.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_4 = createStyles.createStyles({
  fullSizePreview: { flex: 1, alignItems: "center", justifyContent: "center" },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/AvatarDecorationProductPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AvatarDecorationProductPreview(product) {
      const cResult = c.c(9);
      const tmp4 = closure_4();
      const currentUser = useCurrentUser.useCurrentUser();
      const firstAvatarDecoration = useShopProductItems.useShopProductItems(product.product).firstAvatarDecoration;
      if (null == firstAvatarDecoration) {
        return null;
      } else {
        if (cResult[0] !== firstAvatarDecoration.label) {
          const intl = util.intl;
          const obj4 = { a11y_text: firstAvatarDecoration.label };
          const formatToPlainStringResult = intl.formatToPlainString(util.t.Do2lxE, obj4);
          cResult[0] = firstAvatarDecoration.label;
          cResult[1] = formatToPlainStringResult;
          let tmp6 = formatToPlainStringResult;
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[2] === firstAvatarDecoration) {
          if (cResult[3] === currentUser) {
            let tmp8 = cResult[4];
          }
          if (cResult[5] === tmp4.fullSizePreview) {
            if (cResult[6] === tmp6) {
              if (cResult[7] === tmp8) {
                let tmp11 = cResult[8];
              }
              return tmp11;
            }
          }
          const obj5 = {
            style: tmp4.fullSizePreview,
            pointerEvents: "box-none",
            accessibilityLabel: tmp6,
            accessibilityRole: "image",
            accessible: true,
            children: tmp8,
          };
          const tmp14 = (
            <View
              style={tmp4.fullSizePreview}
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
        const obj6 = {
          user: currentUser,
          guildId: "r",
          size: native.AvatarSizes.GIFT_START,
          avatarDecoration: firstAvatarDecoration,
          animate: null,
        };
        const tmp10 = jsx(native.Avatar, {
          user: currentUser,
          guildId: "r",
          size: native.AvatarSizes.GIFT_START,
          avatarDecoration: firstAvatarDecoration,
          animate: null,
        });
        cResult[2] = firstAvatarDecoration;
        cResult[3] = currentUser;
        cResult[4] = tmp10;
        tmp8 = tmp10;
      }
    }
  : function AvatarDecorationProductPreview(product) {
      const tmp = closure_4();
      const currentUser = useCurrentUser.useCurrentUser();
      const firstAvatarDecoration = useShopProductItems.useShopProductItems(product.product).firstAvatarDecoration;
      let tmp5 = null;
      if (null != firstAvatarDecoration) {
        const obj3 = {
          style: tmp.fullSizePreview,
          pointerEvents: "box-none",
          accessibilityLabel: null,
          accessibilityRole: "image",
          accessible: true,
          children: null,
        };
        const intl = util.intl;
        const obj4 = { a11y_text: firstAvatarDecoration.label };
        obj3.accessibilityLabel = intl.formatToPlainString(util.t.Do2lxE, obj4);
        const obj5 = {
          user: currentUser,
          guildId: "r",
          size: native.AvatarSizes.GIFT_START,
          avatarDecoration: firstAvatarDecoration,
          animate: null,
        };
        obj3.children = jsx(native.Avatar, {
          user: currentUser,
          guildId: "r",
          size: native.AvatarSizes.GIFT_START,
          avatarDecoration: firstAvatarDecoration,
          animate: null,
        });
        tmp5 = (
          <View
            style={tmp.fullSizePreview}
            pointerEvents="box-none"
            accessibilityLabel={null}
            accessibilityRole="image"
            accessible
          >
            {null}
          </View>
        );
      }
      return tmp5;
    };
