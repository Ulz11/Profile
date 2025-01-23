import requests

url = "https://ulz11.github.io/Profile/"
file_name = "Ulziibadrakh_Github_Profile.html"  # Use .html for a webpage

response = requests.get(url)

if response.status_code == 200:
    with open(file_name, "wb") as file:
        file.write(response.content)
    print(f"File saved as {file_name}")
else:
    print(f"Failed to download. Status code: {response.status_code}")
