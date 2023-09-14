pipeline {
    agent any 
    stages {
        stage('Code') { 
            steps {
                echo "cloning the code "
                git url:"https://github.com/sujitksh/frontend.git",branch:"master"
            }
        }
        stage('Build') { 
            steps {
                echo "build the code "
                sh "docker build -t node-first-app ."
            }
        }
        stage('Push to dockerHub') { 
            steps {
               echo "push the code on dockerHub"
               withCredentials([usernamePassword(credentialsId: 'dockerHub', usernameVariable: 'dockerHubUser', passwordVariable: 'dockerHubPass')]) {
                  sh "docker tag node-first-app ${env.dockerHubUser}/node-first-app:latest"
                  sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                  sh "docker push ${env.dockerHubUser}/node-first-app:latest"
               }
              
            }
        }
        stage('Deploy') { 
            steps {
                echo "deploye the code"
                sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}