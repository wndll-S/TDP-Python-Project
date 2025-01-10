from flask import Flask, render_template, url_for, send_from_directory
import markdown
import os
import webview
import threading

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('home.html')

@app.route("/navigation")
def navigation():
    return render_template('navigation.html')

@app.route("/installation")
def installation():

       # Path to README.md inside the static folder
    readme_path = os.path.join(app.static_folder, 'README.md')
    
    try:
        # Read the README.md file
        with open(readme_path, 'r') as file:
            readme_content = file.read()

        # Convert Markdown to HTML
        readme_html = markdown.markdown(readme_content, extensions=['nl2br'])
        
        # Optionally add custom styling to the HTML
        readme_html = '<div class="custom-style max-w-7xl min-w-7xl">' + readme_html + '</div>'

        return render_template('installation.html', readme_content=readme_html)
    
    except FileNotFoundError:
        return "README.md not found in the static folder."

@app.route("/demonstration-video")
def demonstration():
    student_demo = url_for('static', filename='videos/student.mp4')
    admin_demo = url_for('static', filename='videos/admin.mp4')
    staff_demo = url_for('static', filename='videos/staff.mp4')
    return render_template('demonstration.html', student_demo=student_demo, admin_demo=admin_demo, staff_demo=staff_demo)

@app.route("/user-manual")
def manual():
    pdf_url = url_for('static', filename='docs/manual.pdf')
    return render_template('manual.html', pdf_url=pdf_url)

@app.route("/system-design")
def design():
    pdf_url = url_for('static', filename='docs/design.pdf')
    return render_template('design.html', pdf_url=pdf_url)

def run_flask():
    app.run(debug=True, use_reloader=False, port=5001)  # Flask runs on port 5001

@app.route('/favicon.ico')
def favicon():
    return send_from_directory('static', 'images/favicon.ico', mimetype='image/vnd.microsoft.icon')

if __name__ == "__main__":
    
    # Run Flask in a separate thread
    flask_thread = threading.Thread(target=run_flask)
    flask_thread.start()

    # Create a webview window that will display the Flask content
    webview.create_window('TDP Scholarhub', 'http://127.0.0.1:5001')
    webview.start()