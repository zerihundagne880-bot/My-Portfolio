import requests
from bs4 import BeautifulSoup

def get_news():
    # መረጃ የምንፈልግበት ድረ-ገጽ (ለምሳሌ BBC News)
    url = "https://www.bbc.com/news"
    
    print("መረጃ ከ BBC ላይ እየፈለግኩ ነው...\n")
    
    try:
        # ድረ-ገጹን ለመጠየቅ
        response = requests.get(url)
        
        # HTML መረጃውን ለመተንተን (Parse)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # የዜና ርዕሶችን መፈለግ (h2 tags)
        headlines = soup.find_all('h2')
        
        print("--- የዛሬ ትኩስ ዜናዎች ---")
        
        # የመጀመሪያዎቹን 10 ርዕሶች ብቻ ለማሳየት
        count = 0
        for title in headlines:
            text = title.get_text().strip()
            if text and count < 10:
                count += 1
                print(f"{count}. {text}")
                
    except Exception as e:
        print(f"ስህተት ተፈጥሯል: {e}")

if __name__ == "__main__":
    get_news()
        