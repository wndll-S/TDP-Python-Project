# TDP Scholarhub Installation Guide

## Prerequisites

Before you begin, ensure you have met the following requirements:
- PHP >= 7.3
- Composer
- Node.js & npm
- Git

## Installation

Follow these steps to set up the project:

1. **Clone the repository:**
    ```bash -
    git clone <https://github.com/wndll-S/Capstone>
    cd <Capstone>
    ```

2. **Install PHP dependencies:**
    ```bash -
    composer install
    ```

3. **Install Node.js dependencies:**
    ```bash -
    npm install
    ```

4. **Set up environment variables:**
    - Copy the `.env.example` file to `.env`:
        ```bash -
        cp .env.example .env
        ```
    - Update the `.env` file with your database and other configurations.

5. **Run database migrations:**
    ```bash -
    php artisan migrate
    ```

6. **Build the frontend assets:**
    ```bash -
    npm run dev
    ```

## Running the Application

To start the development server, run:
```bash -
php artisan serve
```

Visit `http://localhost:8000` in your browser to see the application.

## Additional Commands

- **Compile assets for production:**
    ```bash -
    npm run build
    ```

Happy Coding !!!

