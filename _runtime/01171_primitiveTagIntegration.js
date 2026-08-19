// === Module 1171: primitiveTagIntegration ===

// Module 1171 (primitiveTagIntegration)
const require = arg1;
const dependencyMap = arg6;
const PrimitiveTagIntegration = "PrimitiveTagIntegration";
arg5.INTEGRATION_NAME = "PrimitiveTagIntegration";
arg5.primitiveTagIntegration = () => ({
  name: PrimitiveTagIntegration,
  setup(on) {
    on.on("beforeSendEvent", (tags) => {
      closure_0 = tags;
      if (tags.tags) {
        const _Object = Object;
        const keys = Object.keys(tags.tags);
        const item = keys.forEach((arg0) => {
          tags.tags[arg0] = tags(closure_1_1[0]).PrimitiveToString(tags.tags[arg0]);
        });
      }
    });
  },
  afterAllSetup() {
    if (callback(table[1]).NATIVE.enableNative) {
      const NATIVE = callback(table[1]).NATIVE;
      const result = NATIVE._setPrimitiveProcessor((arg0) => callback(table[0]).PrimitiveToString(arg0));
    }
  }
});