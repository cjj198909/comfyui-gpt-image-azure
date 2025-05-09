import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";

app.registerExtension({
  name: "comfyui-gpt-image.Configuration",
  setup() {
    function updateConfig() {
      const API_BASE = app.extensionManager.setting.get(
        "comfyui-gpt-image.Configuration.API_BASE"
      );
      const AUTH_TOKEN = app.extensionManager.setting.get(
        "comfyui-gpt-image.Configuration.AUTH_TOKEN"
      );

      api.fetchApi("/lceric/gptimage/config/save", {
        method: "POST",
        body: JSON.stringify({
          api_base: API_BASE,
          auth_token: AUTH_TOKEN,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
    }

    updateConfig();

    app.ui.settings.addSetting({
      id: "comfyui-gpt-image.Configuration.API_BASE",
      name: "api_base",
      type: "text",
      defaultValue: "",
      tooltip:
        "OpenAI GPT Image's API address(api_base), eg. https://api.openai.com/v1/",
      attrs: {
        style: {
          fontFamily: "monospace",
        },
        onblur: () => {
          updateConfig();
        },
      },
    });

    app.ui.settings.addSetting({
      id: "comfyui-gpt-image.Configuration.AUTH_TOKEN",
      name: "auth_token",
      type: "text",
      defaultValue: "",
      tooltip:
        "OpenAI GPT Image's API secret key(auth_token), eg. sk-xxxxxxxxxxx",
      attrs: {
        style: {
          fontFamily: "monospace",
        },
        onblur: () => {
          updateConfig();
        },
      },
    });
  },
});
