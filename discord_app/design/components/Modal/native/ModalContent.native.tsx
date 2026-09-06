// discord_app/design/components/Modal/native/ModalContent.native.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_2 = createStyles.createStyles({
  scrollContainer: { flex: 1 },
  contentContainer: {
    flexDirection: "column",
    paddingTop: 24,
    paddingHorizontal: 16,
    alignItems: "center",
    flexGrow: 1,
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalContent.native.tsx");

export const ModalContent = noop.forwardRef((children, ref) => {
  const tmp = closure_2();
  return (
    <ScrollView
      style={tmp.scrollContainer}
      contentContainerStyle={tmp.contentContainer}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      ref={ref}
    >
      {children.children}
    </ScrollView>
  );
});
