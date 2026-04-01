## What You Have Right Now

This repository currently contains **two different web apps**:

- `app.py` is a **Flask (Python)** application.
- `Tierdrop/` is an **ASP.NET Core MVC** application.

These are separate runtimes. ASP.NET Core does **not** directly execute Python Flask code from `app.py`.

## The Important Decision

You have 3 realistic options:

### Option 1: Deploy the Flask app to AWS

Use this if `app.py` is the real project you want users to run.

Good fit when:

- your login, database, and routes already live in `app.py`
- you do not want to rewrite the backend in C#

Typical AWS choices:

- AWS Elastic Beanstalk for Python
- AWS EC2 running Flask with Gunicorn
- AWS App Runner with a container

### Option 2: Rewrite the Flask app into ASP.NET Core

Use this if your final hosting target must be the `Tierdrop` ASP.NET MVC app.

This means rebuilding the Flask features in C#:

- routes
- authentication
- models
- database access
- templates/views

This is more work, but then everything lives in one ASP.NET app.

### Option 3: Keep both apps and let ASP.NET call Flask

Use this only if you truly need both.

Example:

- ASP.NET serves the frontend pages
- Flask runs separately as an API
- ASP.NET or JavaScript calls the Flask endpoints

This works, but it is more complicated to deploy and maintain.

## Best Path For This Repo

Based on the current code, **Option 1 is the easiest and safest**.

Why:

- `app.py` already contains the real application logic.
- `Tierdrop/` is currently just the default ASP.NET starter project.
- Rewriting everything into ASP.NET would take much longer.

## If You Want AWS Soon

The simplest path is:

1. Deploy the Flask app as the real application.
2. Ignore `Tierdrop/` for now, unless you plan to fully migrate later.

## Local Run Commands

### Flask app

From the repo root:

```bash
source venv/bin/activate
python app.py
```

or:

```bash
flask run
```

### ASP.NET app

From the `Tierdrop` folder:

```bash
dotnet run
```

## If You Insist On Using Tierdrop

Then the question is not "how do I make ASP.NET run the GitHub repo code?"

The real question is:

"How do I move the Flask app into ASP.NET Core?"

That would require:

- creating C# models for users
- setting up Entity Framework Core
- moving Flask routes into controllers
- replacing Flask auth with ASP.NET authentication
- converting Jinja templates into Razor views

## Recommended Next Step

If your goal is just to get this hosted on AWS, deploy the Flask app first.

If your goal is to submit or maintain an ASP.NET version, then start a structured migration from `app.py` into `Tierdrop/`.
