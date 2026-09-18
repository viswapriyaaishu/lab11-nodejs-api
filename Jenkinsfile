pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build --platform linux/amd64 -t nodejs-api-image .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat '''
                    docker rm -f nodejs-api-container
                    docker run -d --platform linux/amd64 -p 8082:3000 --name nodejs-api-container nodejs-api-image
                '''
            }
        }

        stage('Test API') {
            steps {
                bat 'curl.exe -f http://localhost:8082/status'
            }
        }
    }

    post {
        success {
            echo 'CI/CD pipeline completed successfully.'
        }

        failure {
            echo 'CI/CD pipeline failed.'
        }
    }
}