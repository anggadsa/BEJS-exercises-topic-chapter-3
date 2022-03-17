# `ERD Exercises - Our Client`

## Directions

- Diketahui terdapat suatu perusahaan yang menginginkan pemetaan database terhadap `Client` nya. 
- `Client` memiliki informasi sebagai berikut: `client_id`, `legal_name`, `alias_name`, dan attribut lainnya yang berkaitan dengan relasi. Anda perlu melakukan analisis sendiri, tambahkan attribut sesuai `directions` yang telah diberikan.
- `Client` tersebut memiliki beberapa `Brand`, memiliki hanya satu `Profil`, dan satu `Client_Type`.
- `Brand` memiliki informasi sebagai berikut: `brand_id`, `name`, dan attribut lainnya yang berkaitan dengan relasi. Anda perlu melakukan analisis sendiri, tambahkan attribut sesuai `directions` yang telah diberikan.
- Setiap `Brand` memiliki `Brand_Type`.
- `Brand_Type` dan `Client_Type` memiliki informasi yang sama, yaitu `name`.
- Satu `Client_Type` dapat berada di banyak `Client`. Begitupun antara `Brand_Type` dengan `Brand`.
- `Profil` memiliki informasi sebagai berikut: `profil_id`, `email`, `phone_number`, dan attribut lainnya yang berkaitan dengan relasi. Anda perlu melakukan analisis sendiri, tambahkan attribut sesuai `directions` yang telah diberikan.

### Objectives

- Buatlah ERD untuk menggambarkan poin2 [Directions](#directions) yang disebutkan diatas.
- Tunjukkan mana yang merupakan `entitas`, `primary key`, `foreign key`, `attributes` untuk setiap entitas, dan `relasi` diantara entitas. 