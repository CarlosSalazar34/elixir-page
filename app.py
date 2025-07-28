from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()
app.mount(path="/static", app=StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")


async def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})  

app.add_api_route("/", index, methods=["GET", "POST"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app="app:app", host="127.0.0.1", port=8000, reload=True)