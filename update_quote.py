import requests
import json
import sys

url = "https://api.quotable.io/random"

try:
    # Try with SSL verification first
    response = requests.get(url, timeout=10, verify=True)
    response.raise_for_status()
    r = response.json()
except requests.exceptions.SSLError as e:
    print(f"SSL Error (trying without verification): {e}")
    # Fallback: try without SSL verification (for testing only)
    response = requests.get(url, timeout=10, verify=False)
    response.raise_for_status()
    r = response.json()
except requests.exceptions.RequestException as e:
    print(f"Error fetching quote: {e}")
    sys.exit(1)
except json.JSONDecodeError as e:
    print(f"Error parsing JSON: {e}")
    sys.exit(1)

quote = {
    "quote": r["content"],
    "author": r["author"]
}

try:
    with open("quotes.json", "w", encoding="utf-8") as f:
        json.dump(quote, f, indent=2, ensure_ascii=False)
    print("Quote updated successfully!")
    print(f"Quote: {quote['quote']}")
    print(f"Author: {quote['author']}")
except Exception as e:
    print(f"Error writing to file: {e}")
    sys.exit(1)
