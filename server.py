import os
from aiohttp import web
from server import PromptServer
import json

routes = PromptServer.instance.routes
config_file_path = os.path.join(os.path.dirname(__file__), "config.json")

@routes.post("/lceric/gptimage/config/save")
async def save_config(request):
    try:
        json_data = await request.json()
        json_str = json.dumps(json_data, ensure_ascii=False, indent=4)
        with open(config_file_path, "w", encoding="utf-8") as f:
            f.write(json_str)

        return web.Response(status=200)
    except Exception as e:
        return web.Response(status=500, text=f"Failed to save config: {str(e)}")