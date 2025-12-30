import requests, json

url = "https://api.quotable.io/random"
r = requests.get(url, timeout=10).json()

quote = {
    "quote": r["content"],
    "author": r["author"]
}

with open("quotes.json", "w") as f:
    json.dump(quote, f, indent=2)

print("Quote updated:", quote["quote"])
