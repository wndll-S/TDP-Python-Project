## Installation Guide

### Prerequisites

Make sure you have the following installed on your system:
- Python (>= 3.6)
- pip (Python package installer)
- Node.js (>= 12.x)
- npm (Node package manager)

### Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/wndll-S/TDP-Python-Project 
    ->
    cd TDP-Python-Project
    ```

2. **Set up a virtual environment:**
    ```bash
    python -m venv .venv
    .venv\Scripts\activate  # On Windows
    ```

3. **Install Flask:**
    ```bash
    pip install flask
    ```

4. **Install Markdown:**
    ```bash
    pip install markdown
    ```

5. **Install Pywebview:**
    ```bash
    pip install pywebview
    ```

6. **Build Tailwind CSS:**
    Run the build script:
    ```bash
    npx tailwindcss -i ./static/css/tailwind.css -o ./static/css/output.css --minify
    ```

7. **Install WSGI server:**
    ```bash
    pip install waitress
    ```

8. **Run the Flask application:**
    ```bash
    flask --app app run --debug --port=5001 # For local testing and browser view
    or
    python app.py # for a separate web browser window
    or
    waitress-serve --host=127.0.0.1 --port=5001 app:app # For Production
    ```

Happy coding!


<!-- ## System Navigation Guide -->

