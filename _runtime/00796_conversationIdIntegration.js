// _runtime/00796_conversationIdIntegration.js
import setupIntegration from "00751_setupIntegration.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const conversationIdIntegration = setupIntegration.defineIntegration(() => ({
  name: "ConversationId",
  setup(on) {
    on.on("spanStart", (setAttribute) => {
      const currentScope = closure_1_0(712).getCurrentScope();
      const scopeData = currentScope.getScopeData();
      const obj = closure_1_0(712);
      const isolationScope = closure_1_0(712).getIsolationScope();
      const tmp4 = scopeData.conversationId || isolationScope.getScopeData().conversationId;
      if (tmp4) {
        const attr = setAttribute.setAttribute(closure_1_0(703).GEN_AI_CONVERSATION_ID_ATTRIBUTE, tmp4);
      }
      const obj3 = closure_1_0(712);
    });
  },
}));
