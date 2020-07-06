# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|text|null: false|
password|integer|null: false

### Association
- has_many :messages
- has_many :groups, through: :groups_users
- has_many :groups_users

### groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users, through: :groups_users
- has_many :messages
- has_many :groups_users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|image|string|
|content|text|
|created_at|t.timestamps|null: false|

### Association

- belongs_to :user
- belongs_to :group

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|groupe_id|integer|null: false, foreign_key: true|

### Association

- belongs_to :group
- belongs_to :user
