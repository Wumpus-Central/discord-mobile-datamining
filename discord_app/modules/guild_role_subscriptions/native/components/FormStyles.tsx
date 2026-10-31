// discord_app/modules/guild_role_subscriptions/native/components/FormStyles.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const obj = {
  container: {
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_24,
    gap: nativeDefault.space.PX_24,
  },
};
const styles = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormStyles.tsx");

export default styles;
