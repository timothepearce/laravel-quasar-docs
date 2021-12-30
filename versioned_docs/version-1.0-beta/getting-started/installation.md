# Installation

This section will guide you through the installation process of the library.

## Install the dependency

Move to the directory of your Laravel application and run the following command:

```bash
composer require timothepearce/quasar
```

## Migrate the tables

Run the following command to create the Quasar tables:

```bash
php artisan migrate
```

## Publish the config file

In order to publish the `config.php` file (which is reviewed in the next section), execute:

```bash
php artisan vendor:publish --tag=quasar-config
```